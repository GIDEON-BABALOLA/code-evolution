export const Product = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds
    return <div>Product</div>;
}