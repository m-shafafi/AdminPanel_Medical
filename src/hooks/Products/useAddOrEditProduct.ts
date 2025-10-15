
import { useMutation } from "@tanstack/react-query";
import { Mediator } from "@Mediatr/index";
import { ErrorType } from "common/entities/ErrorType";
import { ProductListResponse } from "common/entities/Product/ProductListResponse";
import { ProductRequest } from "common/entities/Product/ProductRequest";
import SetProductCommand from "business/application/Product/Command/SetProductCommand";


const mediator = new Mediator();

const useAddOrEditProduct = () => {
    return useMutation<ProductListResponse, ErrorType<ProductRequest>, SetProductCommand>({
        mutationFn: (data: SetProductCommand) => mediator.send<ProductListResponse>(data),
        onMutate: (variables) => {
            return () => variables;
        },
        onSuccess: (data, variables) => {
            return () => data;
        },
        onError: (error, variables) => {
            return () => variables;
        }
    });

}
export default useAddOrEditProduct;
