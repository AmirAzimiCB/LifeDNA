import Tag from "./Tag";

const ProductTags = ({ title, tags }: { title: string; tags: string[] }) => {
  if (!tags.length) return;
  return (
    <div className="grid gap-4">
      <h4 className="text-lg font-semibold">{title}</h4>
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Tag item={tag} key={`product-tag-${index}`} />
        ))}
      </ul>
    </div>
  );
};

export default ProductTags;
