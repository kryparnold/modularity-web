import * as React from "react"
import { useMDXComponent } from "next-contentlayer/hooks"
import { cn } from "@/lib/utils"
import { MDXComponents } from "mdx/types";

const components: MDXComponents = {
    h1: ({ className, ...props }) => (
        <h1
            className={cn(
                "my-2 scroll-m-20 text-3xl font-bold underline tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h2: ({ className, ...props }) => (
        <h2
            className={cn(
                "mt-8 scroll-m-20 pb-1 text-2xl font-semibold tracking-tight first:mt-0",
                className
            )}
            {...props}
        />
    ),
    h3: ({ className, ...props }) => (
        <h3
            className={cn(
                "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h4: ({ className, ...props }) => (
        <h4
            className={cn(
                "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h5: ({ className, ...props }) => (
        <h5
            className={cn(
                "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h6: ({ className, ...props }) => (
        <h6
            className={cn(
                "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    a: ({ className, ...props }) => (
        <a
            className={cn("font-medium underline underline-offset-4", className)}
            {...props}
        />
    ),
    p: ({ className, ...props }) => (
        <p
            className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
            {...props}
        />
    ),
    ul: ({ className, ...props }) => (
        <ul className={cn("my-3 ml-6 list-disc", className)} {...props} />
    ),
    ol: ({ className, ...props }) => (
        <ol className={cn("my-3 ml-6 list-decimal", className)} {...props} />
    ),
    li: ({ className, ...props }) => (
        <li className={cn("mt-2 text-xl", className)} {...props} />
    )
}

interface MdxProps {
    code: string
}

export function Mdx({ code }: MdxProps) {
    const Component = useMDXComponent(code)

    return (
        <div className="mdx">
            <Component components={components} />
        </div>
    )
}