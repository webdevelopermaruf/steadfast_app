import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import { authorsTableData } from "@/data";

export function Products() {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">

      <Card className="">
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Add Product
          </Typography>
        </CardHeader>
        <CardBody className="p-4">

          <form className="mt-8 mb-2 mx-auto md:max-w-3xl ">
            <div className="mb-1 grid md:grid-cols-2 gap-6">
              <div>
                <Typography variant="small" color="blue-gray" className="mb-3 font-medium">
                  Product Name
                </Typography>
                <Input
                  size="lg"
                  placeholder=""
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div>
                <Typography variant="small" color="blue-gray" className="mb-3 font-medium">
                Size
              </Typography>
                <Input
              
                  size="lg"
                  placeholder=""
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                /> </div>
              <div><Typography variant="small" color="blue-gray" className="mb-3 font-medium">
                Quantity
              </Typography>
                <Input
       
                  size="lg"
                  placeholder=""
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                /> </div>
              <div> <Typography variant="small" color="blue-gray" className="mb-3 font-medium">
                Color
              </Typography>
                <Input
      
                  size="lg"
                  placeholder=""
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                /></div>
              <div><Typography variant="small" color="blue-gray" className="mb-3 font-medium">
                Buying Price
              </Typography>
                <Input
        
                  size="lg"
                  placeholder=""
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                /></div>
              <div>
                <Typography variant="small" color="blue-gray" className="mb-3 font-medium">
                  Selling Price
                </Typography>
                <Input
         
                  size="lg"
                  placeholder=""
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                /></div>

              <div> <Button className="mt-3" fullWidth>
                ADD
              </Button></div>


            </div>
          </form>
        </CardBody>
      </Card>
      <Card className="">
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            All Product
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Product", "Size", "Color", "Quantity", "Buying Price", "Selling Price", "Action"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {authorsTableData.map(
                ({ product_name, size, color, quantity, buying_pp, selling_pp }, key) => {
                  const className = `py-3 px-5 ${key === authorsTableData.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                    }`;

                  return (
                    <tr key={product_name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">

                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {product_name}
                            </Typography>

                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {size}
                        </Typography>
                      </td><td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {color}
                        </Typography>
                      </td>

                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {quantity}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {buying_pp}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {selling_pp}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-600"
                        >
                          Edit
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>

    </div>
  );
}

export default Products;
