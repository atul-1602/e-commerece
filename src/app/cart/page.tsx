"use client";
import { Text, Flex, Heading, Container, Button } from "@chakra-ui/react";
import { Alert } from "@/components/ui/alert"
import CartItem from "../../design-system/components/CartItem";
import { useColorMode } from "@/components/ui/color-mode";
import { colors } from "@/design-system/ui-logic/color";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CustomModal from "@/design-system/components/modals/CustomModal";
import CheckoutModal from "@/design-system/components/modals/CheckoutModal";
import usePlaceOrders from "@/design-system/ui-logic/hooks/usePlaceOrders";
import getUser from "@/design-system/ui-logic/hooks/useGetUser";
import { EmptyState } from "@/components/ui/empty-state"
import { LuShoppingCart } from "react-icons/lu"


const CartPage = () => {
  const { colorMode } = useColorMode();
  const cardBg = colors[colorMode as "light" | "dark"];
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false)
  const [cartProducts, setCartProducts] = useState<any[]>([]);
  const [isAlert, setIsAlert] = useState(false)
  const { user } = getUser()
  const orderProducts = cartProducts.map(product => {
    const { id, name, price, quantity, warranty_period } = product;
    return { id, name, price, quantity, warranty_period };
  });

  const { data, loading, error, fetchData } = usePlaceOrders({
    username: user,
    products: orderProducts,
  });
  
  const confirmOrder = async() => {
    fetchData();    
    setOpenModal(false);
    localStorage.removeItem("cart")
    window.location.reload();
  };
  useEffect(() => {
    if (data && !loading) {
      setIsAlert(true);
      const timer = setTimeout(() => {
        setIsAlert(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [data, loading]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartProducts(storedCart);
  }, []);

  const handleRemoveProduct = (id : number) =>{
    const updatedCart = cartProducts.filter((product)=>{
      return product?.id != id
    })
    setCartProducts(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
  // Handle quantity change in CartPage
  const handleQuantityChange = (updatedProduct: any) => {
    const updatedCart = cartProducts.map((product) => 
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setCartProducts(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalCost = cartProducts.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
   
  return (
    <Container
      display="flex"
      flexWrap="wrap"
      flexDir="column"
      p={4}
      justifyContent="start"
      gap={8}
      minHeight="100vh"
      alignItems="center"
    >
      {cartProducts.length > 0 ? (
        <>
          <Heading textAlign="center">
            Your Cart ({cartProducts.length} items)
          </Heading>
          <Flex
            justifyContent="space-around"
            w="100%"
            p={4}
            borderBottom={`2px solid ${cardBg?.navbarBg}`}
          >
            <Text>Items</Text>
            <Text>Price</Text>
            <Text>Quantity</Text>
            <Text>Total</Text>
          </Flex>
          {cartProducts.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              onQuantityChange={(newQuantity: number) => {
                const updatedProduct = { ...product, quantity: newQuantity };
                handleQuantityChange(updatedProduct);
              }}
              onRemoveProduct={(id: number) => {
                handleRemoveProduct(id);
              }}
            />
          ))}
          <Flex
            justifyContent="space-between"
            w="100%"
            p={4}
            bg={cardBg?.navbarBg}
          >
            <Text fontSize="xl" fontWeight="bold">
              Total:
            </Text>
            <Text fontSize="xl" fontWeight="bold">
              ${totalCost.toFixed(2)}
            </Text>
          </Flex>
          <Flex pb={4}>
            <Button
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Checkout
            </Button>
            <CustomModal
              isOpen={openModal}
              onClose={() => {
                setOpenModal(false);
              }}
              title="Confirm to place order!"
            >
              <CheckoutModal
                totalCost={totalCost}
                onClose={() => {
                  setOpenModal(false);
                }}
                confirmOrder={confirmOrder}
              />
            </CustomModal>
          </Flex>
        </>
      ) : (
        <>
          <EmptyState
            icon={<LuShoppingCart />}
            title="Your cart is empty"
            description="Explore our products and add items to your cart"
          />
          <Button width="fit-content" onClick={() => router.push("/")}>
            Continue Shopping
          </Button>
        </>
      )}
      {isAlert && (
        <Alert
          status={data ? "success" : "error"}
          variant="subtle"
          title={data?.message}
          style={{
            position: "fixed",
            top: "4%",
            right: "0%",
            zIndex: 9999, // Ensure it appears above other content
            width: "40%", // Optional: make it span the full width
            padding: "1rem", // Optional: add some padding for better spacing
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: add shadow for visibility
          }}
        />
      )}
    </Container>
  );
};

export default CartPage;
