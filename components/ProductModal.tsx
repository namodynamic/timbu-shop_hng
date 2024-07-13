import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { cn, formatAmount } from "@/lib/utils";
import { Button } from "./ui/button";
import { FaRegHeart } from "react-icons/fa";
import ModalCard from "./ModalCard";
import { useCart } from "@/context/CartContext";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    description: string | null;
    availability_quantity: number;
    current_price: number;
    photos: string[];
  } | null;
}

const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
  const { addToCart } = useCart();

  const [bigPhoto, setBigPhoto] = useState<string>(
    product ? product.photos[0] : ""
  );
  useEffect(() => {
    if (product && product.photos.length > 0) {
      setBigPhoto(product.photos[0]);
    }
  }, [product]);
  if (!product) return null;
  const amount = formatAmount(product.current_price);

  const changeBigProductPhoto = (photo: string) => {
    setBigPhoto(photo);
  };

  const handleAddToCart = () => {
    addToCart(product as any);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-sm:h-[90%] max-w-[520px]">
        <div className="grid max-sm:gap-[2px]">
          <div>
            {product.photos[0] && (
              <div className="flex justify-center">
                <Image
                  src={bigPhoto}
                  width={600}
                  height={400}
                  alt={product.name}
                  className="max-sm:w-[300px] max-sm:h-[200px]"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-1 max-w-[400px] sm:gap-2">
            {product.photos.map((photo, index) => (
              <ModalCard
                key={index}
                imgURL={{ thumbnail: photo, bigPhoto: photo }}
                changeBigProductPhoto={(photo) => changeBigProductPhoto(photo)}
                bigProductPhoto={bigPhoto}
              />
            ))}
          </div>
        </div>
        <div className="mt-2 space-y-2">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <p className="text-muted-foreground">{product.description}</p>
          <div className="text-2xl font-bold">{amount}</div>
          <p className="text-[#A3D9A5]">
            In Stock: {product.availability_quantity}
          </p>
          <p>Rating: ⭐⭐⭐⭐</p>

          <div className="flex gap-2">
            <Button size="sm" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Button variant="outline" size="sm">
              <FaRegHeart className="w-4 h-4 mr-2" />
              Wishlist
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
