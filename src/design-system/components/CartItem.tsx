'use client'
import { Button, Container, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import useMedia from "../ui-logic/hooks/useMedia";
import { useColorMode } from "@/components/ui/color-mode";
import { colors } from "../ui-logic/color";

const CartItem = ({ product, onQuantityChange, onRemoveProduct }: any) => {
  const { getImageUrl } = useMedia();
  const [quantity, setQuantity] = useState(product?.quantity);
  const { colorMode } = useColorMode();
  const cardBg = colors[colorMode as "light" | "dark"];

  const updateCartInLocalStorage = (updatedCart: any) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getCartFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  };

  const updateProductQuantityInCart = (productId: number, newQuantity: number) => {
    const cart = getCartFromLocalStorage();
    const updatedCart = cart.map((item: any) => {
      if (item.id === productId) {
        if (newQuantity === 0) {
          return null;
        }
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter((item: any) => item !== null);
  
    if (updatedCart.length === 0) {
      localStorage.removeItem('cart');
    } else {
      updateCartInLocalStorage(updatedCart);
    }
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => {
      const newQuantity = Math.max(1, prevQuantity - 1);
      updateProductQuantityInCart(product?.id, newQuantity);
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const handleIncrement = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      updateProductQuantityInCart(product?.id, newQuantity);
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Math.max(1, Number(e.target.value));
    setQuantity(newQuantity);
    updateProductQuantityInCart(product?.id, newQuantity);
    onQuantityChange(newQuantity);
  };

  useEffect(() => {
    const cart = getCartFromLocalStorage();
    const productInCart = cart.find((item: any) => item?.id === product?.id);

    if (productInCart) {
      setQuantity(productInCart.quantity); 
    }
  }, [product?.id]);

  return (
    <Container display="flex" justifyContent="space-between" borderBottom={`2px solid ${cardBg?.navbarBg}`} pb={4}>
      <Flex borderRadius="xl" width="30%">
        <Image
          src={getImageUrl(product?.image)}
          alt={product?.name}
          width={200}
          height={200}
          borderRadius="xl"
        />
        <Text fontWeight={700} fontSize="xl">
          {product?.name}
        </Text>
      </Flex>
      <Flex>
        <Text fontWeight={700} fontSize="xl">
          Price: ${product?.price}
        </Text>
      </Flex>
      <Flex>
        <Button onClick={handleDecrement} disabled={quantity <= 1}>-</Button>
        <Input
          value={quantity}  
          onChange={handleInputChange}
          width="70px"
          textAlign="center"
          type="number"
          min="1" 
        />
        <Button onClick={handleIncrement}>+</Button>
      </Flex>
      <Flex flexDir="column">
        <Text fontWeight={700} fontSize="xl">
          Total: ${(product?.price * quantity).toFixed(2)}
        </Text>
        <Button onClick={()=>onRemoveProduct(product?.id)}>Remove</Button>
      </Flex>
    </Container>
  );
};

export default CartItem;