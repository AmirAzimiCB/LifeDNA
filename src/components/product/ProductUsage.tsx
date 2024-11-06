const ProductUsage = ({ data }) => {
  return (
    <div className="grid gap-4">
      <h4 className="text-lg font-semibold">How To Use</h4>
      <p>{data.value}</p>
    </div>
  );
};

export default ProductUsage;
