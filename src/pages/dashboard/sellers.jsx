import React from "react";
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
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon, ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import allSellers from "@/data/all_sellers";

export function Sellers() {
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
    <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
        <Card className="">
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Add Seller
          </Typography>
        </CardHeader>
        <CardBody className="p-4">

          <form className="mt-8 mb-2 mx-auto md:max-w-3xl ">
            <div className="mb-1 grid md:grid-cols-2 gap-6">

           
              <div>


                <Input
                  required
                  label="Seller ID"
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
                  label="Seller Name"
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
                  label="Seller Number"
                  size="lg"
                  placeholder=""
                  className=""
                  labelProps={ {
                    className: "",
                  } }
                /> </div>
             
              <div>

                <Input
                  required
                  label="Facebook ID"
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
                  label="Comission Number"
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
                  label="Comission Method"
                  labelProps={ {
                    className: "",
                  } }
                  className="" >
                  <Option>bKash</Option>
                  <Option>Nagad</Option>
                  <Option>Rocket</Option>
                  <Option>Upay</Option>
                </Select>
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
            All Sellers
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                { ["Seller Code", "Seller Name", "Seller Number", "Facebook ID", "Comission Number", "Comission Method","Action","Report"].map((el) => (
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
              { allSellers.map(
                ({ seller_code,
                seller_name,
                seller_no,
                fb_id, 
                comission_no,
                comission_method }, key) => {
                  const className = `py-3 px-5 ${key === allSellers.length - 1
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
                              { seller_code }
                            </Typography>

                          </div>
                        </div>
                      </td>
                      <td className={ className }>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          { seller_name }
                        </Typography>
                      </td>

                      <td className={ className }>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          { seller_no }
                        </Typography>
                      </td>

                      <td className={ className }>
                        <Typography as="a" href={fb_id} target="_blank" className="text-xs font-semibold text-blue-gray-600">
                          { fb_id }
                        </Typography>
                      </td>
                      <td className={ className }>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          { comission_no }
                        </Typography>
                      </td>
                      <td className={ className }>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          { comission_method }
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
                      <td className={ className }>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-600"
                        >
                          Report
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

export default Sellers;
