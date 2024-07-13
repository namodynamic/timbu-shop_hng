declare type ProductProps = {
    imgURL: StaticImageData;
    name: string;
    price: string;
    availability: string;
}

declare interface PaginationProps {
    page: number;
    totalPages: number;
  }