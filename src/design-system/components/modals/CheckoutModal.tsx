import { Button, Flex, Table, Text } from '@chakra-ui/react';
import React from 'react'

interface modalProps{
  totalCost: number,
  onClose: ()=> void,
  confirmOrder: ()=> void
}
const CheckoutModal = ({totalCost, onClose, confirmOrder}:modalProps) => {
  const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
  
  return (<>
      <Table.Root size="sm">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Product</Table.ColumnHeader>
          <Table.ColumnHeader></Table.ColumnHeader>
          <Table.ColumnHeader textAlign="right">Price</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {storedCart?.map((item : any) => (
          <Table.Row key={item.id}>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.category}</Table.Cell>
            <Table.Cell textAlign="end">{item.price * item.quantity}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
    <Flex justifyContent="space-between" m={2}>
      <Text>TotalCost:</Text>
      <Text fontWeight={700}>{totalCost}</Text>
    </Flex>
    <Flex justifyContent="flex-end" gap={2} mt={4}>
    <Button onClick={onClose}>close</Button>
    <Button onClick={confirmOrder}>proceed</Button>
    </Flex>
  </>
  )
}

export default CheckoutModal
