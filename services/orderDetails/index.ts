import { apiFetch } from "..";

export const getOrderDetails = async (orderId: string, groupId: string) => {
  const response = await apiFetch(orderId, groupId);

  console.log(response);
};
