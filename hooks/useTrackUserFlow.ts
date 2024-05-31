import { getOrderDetails } from "@/services/orderDetails";

type OrderDetails = {
  orderId: string;
  groupId: string;
};

export const useTrackUserFlow = () => {
  const track = (request: any, order?: OrderDetails) => {
    if (request.mainDocumentURL.includes("SignIn&rm=true")) {
      logIn();
    }

    if (request.mainDocumentURL.includes("/orders")) {
      ordersList();
    }

    if (request.mainDocumentURL.includes("/orders") && order) {
      orderDetails(order);
    }

    return true;
  };

  const logIn = () => {
    console.log("# LOGGED IN #");
    return true;
  };

  const ordersList = () => {
    console.log("# ORDERS LIST #");
    return true;
  };

  const orderDetails = (order: OrderDetails) => {
    const { orderId, groupId } = order;
    console.log("# ORDERS DETAILS #");
    getOrderDetails(orderId, groupId);
    console.log("# END OF ORDERS DETAILS #");
    return true;
  };

  return {
    track,
  };
};
