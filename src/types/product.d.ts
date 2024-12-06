type Product = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    quantity?: number;
    rating?: Rating;
    title: string;
}
type Rating = {
    rate: number;
    count: number;
}
type ProductCardProps = {
    product: Product,
}