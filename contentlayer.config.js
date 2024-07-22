import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: `**/*.md`,
	contentType: "mdx",
	fields: {
		title: { type: "string", required: true },
		date: { type: "string", required: true },
	},
	computedFields: {
		slug: {
			type: "string",
			resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ""),
		},
	},
}));

export default makeSource({
	contentDirPath: "posts",
	documentTypes: [Post],
	mdx: {
		rehypePlugins: [rehypeSlug],
		remarkPlugins: [remarkGfm],
	},
});
