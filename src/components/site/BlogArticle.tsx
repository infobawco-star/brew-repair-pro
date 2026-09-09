import type { BlogBlock } from "../../lib/blog";

export function BlogArticleBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2 key={index} className="pt-6 text-2xl font-extrabold text-foreground md:text-3xl">
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3 key={index} className="pt-2 text-lg font-bold text-foreground md:text-xl">
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={index} className="space-y-2">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index} className="text-base leading-[1.9] text-muted-foreground md:text-lg">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
