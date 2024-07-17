import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
  Input,
  Chip,
  Tooltip,
  Select, Option,
  Progress,
  Popover,
  PopoverHandler,
  IconButton,
  PopoverContent,

} from "@material-tailwind/react";
import { Datepicker } from "flowbite-react";
import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon, ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ordersData } from "@/data/orders-data";
export function Orders() {

  const [date, setDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
    setIsOpen(false); // Close the popover
  };

  const handleTodayClick = () => {
    setDate(new Date());
    setIsOpen(false); // Close the popover
  };

  const handleClearClick = () => {
    setDate(null);
    setIsOpen(false); // Close the popover
  };

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };
  const renderOptions = () => {
    const options = [];
    for (let i = 1; i <= 100; i++) {
      const value = `SEL${i.toString().padStart(3, '0')}`;
      options.push(
        <Option key={ value } value={ value }>
          { value }
        </Option>
      );
    }
    return options;
  };


  const getItemProps = (index) =>
  ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });


  const [active, setActive] = React.useState(1);


  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card className="">
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Add Order
          </Typography>
        </CardHeader>
        <CardBody className="p-4">

          <form className="mt-8 mb-2 mx-auto md:max-w-3xl ">
            <div className="mb-1 grid md:grid-cols-2 gap-6">

              <div>

                <Popover placement="bottom" open={ isOpen }
                  handler={ togglePopover }>
                  <PopoverHandler>
                    <Input
                      label="Select a Date"
                      onChange={ () => null }
                      value={ date ? format(date, 'dd/MM/yyyy') : "" }



                      size="lg"
                      placeholder=""
                      className=""
                      labelProps={ {
                        className: "",

                      } }
                      required

                    />
                  </PopoverHandler>
                  <PopoverContent>
                    <DayPicker
                      mode="single"
                      selected={ date }
                      onSelect={ handleDateSelect }
                      showOutsideDays
                      className="border-2"
                      classNames={ {
                        caption: "flex justify-center py-2 mb-4 relative items-center",
                        caption_label: "text-sm font-medium text-gray-900",
                        nav: "flex items-center",
                        nav_button:
                          "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                        nav_button_previous: "absolute left-1.5",
                        nav_button_next: "absolute right-1.5",
                        table: "w-full border-collapse",
                        head_row: "flex font-medium text-gray-900",
                        head_cell: "m-0.5 w-9 font-normal text-sm",
                        row: "flex w-full mt-2",
                        cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                        day: "h-9 w-9 p-0 font-normal",
                        day_range_end: "day-range-end",
                        day_selected:
                          "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                        day_today: "rounded-md bg-gray-200 text-gray-900",
                        day_outside:
                          "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                        day_disabled: "text-gray-500 opacity-50",
                        day_hidden: "invisible",
                      } }
                      components={ {
                        IconLeft: ({ ...props }) => (
                          <ChevronLeftIcon { ...props } className="h-4 w-4 stroke-2" />
                        ),
                        IconRight: ({ ...props }) => (
                          <ChevronRightIcon { ...props } className="h-4 w-4 stroke-2" />
                        ),
                      } }
                    />
                    <div className="flex justify-between mt-4 px-4">
                      <button
                        onClick={ handleTodayClick }
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                      >
                        Today
                      </button>
                      <button
                        onClick={ handleClearClick }
                        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                      >
                        Clear
                      </button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <div>


                <Input
                  required
                  label="Group Order Number"
                  size="lg"
                  placeholder=""
                  className=""
                  labelProps={ {
                    className: "",
                  } }
                />
              </div>
              <div>

                <Input
                  required
                  label="Seller Order Number"
                  size="lg"
                  placeholder=""
                  className=""
                  labelProps={ {
                    className: "",
                  } }
                />
              </div>
              <div>

                <Input
                  required
                  label="Quantity"
                  size="lg"
                  placeholder=""
                  className=""
                  labelProps={ {
                    className: "",
                  } }
                /> </div>
              <div>

                <Select
                  label="Seller ID"
                  required
                  id="seller_code"
                  labelProps={ {
                    className: "",
                  } }
                  className="" >
                  { renderOptions() }
                </Select>
              </div>
              <div>

                <Input
                  required
                  label="Customer Name"
                  size="lg"
                  placeholder=""
                  className=""
                  labelProps={ {
                    className: "",
                  } }
                />
              </div>
              <div>

                <Input
                  required
                  label="Customer Address"
                  size="lg"
                  placeholder=""
                  className=""
                  labelProps={ {
                    className: "",
                  } }
                />
              </div>
              <div>

                <Input

                  size="lg"
                  placeholder=""
                  className=" "
                  labelProps={ {
                    className: "",

                  } }
                  required
                  label="Product"
                />
              </div>
              <div>
                <Input
                  required
                  label="Condition"
                  size="lg"
                  placeholder=""
                  className=""
                  labelProps={ {
                    className: "",
                  } }
                />

              </div>
              <div>

                <Select

                  required
                  label="Condition Status"
                  labelProps={ {
                    className: "",
                  } }
                  className="" >
                  <Option>PAID</Option>
                  <Option>UNPAID</Option>
                </Select>
              </div>
              <div>

                <Input
                  required
                  label="Charge"
                  size="lg"
                  placeholder=""
                  className=""
                  labelProps={ {
                    className: "",
                  } }
                />
              </div>

              <div>

                <Select
                  required
                  label="Charge Status"

                  labelProps={ {
                    className: "",
                  } }
                  className="" >
                  <Option>PAID</Option>
                  <Option>UNPAID</Option>
                </Select>
              </div>

              <div>

                <Input
                  required
                  label="Comission"
                  size="lg"
                  placeholder=""
                  className=""
                  labelProps={ {
                    className: "",
                  } }
                />
              </div>

              <div>
                <Button className="h-11" fullWidth>
                  ADD
                </Button>
              </div>


            </div>
          </form>
        </CardBody>
      </Card>

      <Card className="">
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            All Orders
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                { ["Date", "Group Order", "Seller Order", "Seller Code", "Customer Name", "Number", "Address", "Product", "Condition", "Condition Status", "Charge", "Charge Status", "Comission", "Delivery Status", "Action"].map((el) => (
                  <th
                    key={ el }
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      { el }
                    </Typography>
                  </th>
                )) }
              </tr>
            </thead>
            <tbody>
              { ordersData.map(
                ({ date,
                  group_order,
                  seller_order,
                  seller_code,
                  customer_name,
                  number,
                  customer_address,
                  product,
                  condition,
                  payment_status,
                  charge,
                  charge_status,
                  comission,
                  delivery_state }, key) => {
                  const className = `py-3 px-5 ${key === ordersData.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                    }`;

                  return (
                    <tr key={ date }>
                      <td className={ className }>
                        <div className="flex items-center gap-4">

                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              { date }
                            </Typography>

                          </div>
                        </div>
                      </td>
                      <td className={ className }>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          { group_order }
                        </Typography>
                      </td>

                      <td className={ className }>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          { seller_order }
                        </Typography>
                      </td>

                      <td className={ className }>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          { seller_code }
                        </Typography>
                      </td>
                      <td className={ className }>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          { customer_name }
                        </Typography>
                      </td>
                      <td className={ className }>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          { number }
                        </Typography>
                      </td>
                      <td className={ className }>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          { customer_address }
                        </Typography>
                      </td>
                      <td className={ className }>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          { product }
                        </Typography>
                      </td>
                      <td className={ className }>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          { condition }
                        </Typography>
                      </td>
                      <td className={ className }>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          { payment_status }
                        </Typography>
                      </td>
                      <td className={ className }>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          { charge }
                        </Typography>
                      </td>
                      <td className={ className }>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          { charge_status }
                        </Typography>
                      </td>
                      <td className={ className }>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          { comission }
                        </Typography>
                      </td>
                      <td className={ className }>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          { delivery_state }
                        </Typography>
                      </td>
                      <td className={ className }>
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
              ) }
            </tbody>


          </table>
        </CardBody>
        <div className="flex items-center my-4 mx-4 w-full justify-center">

          <Button
            variant="text"
            className="flex items-center gap-2"
            onClick={ prev }
            disabled={ active === 1 }
          >
            <ArrowLeftIcon strokeWidth={ 2 } className="h-4 w-4" /> Previous
          </Button>
          <div className="flex items-center gap-2">
            <IconButton { ...getItemProps(1) }>1</IconButton>
            <IconButton { ...getItemProps(2) }>2</IconButton>
            <IconButton { ...getItemProps(3) }>3</IconButton>
            <IconButton { ...getItemProps(4) }>4</IconButton>
            <IconButton { ...getItemProps(5) }>5</IconButton>
          </div>
          <Button
            variant="text"
            className="flex items-center gap-2"
            onClick={ next }
            disabled={ active === 5 }
          >
            Next
            <ArrowRightIcon strokeWidth={ 2 } className="h-4 w-4" />
          </Button>
        </div>
      </Card>

    </div>
  );
}

export default Orders;
