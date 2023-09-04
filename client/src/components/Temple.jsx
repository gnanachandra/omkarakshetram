/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import data from "../data/templesData";
import { IoCloseSharp } from "react-icons/io5";
const Temple = ({ open, handleOpen, templeId }) => {
  {
    console.log(data[templeId].name);
  }
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      size="xl"
      className="h-[36rem] overflow-auto"
      dismiss={{ outsidePress: false }}
    >
      <DialogHeader>
        <div className="flex items-center justify-between w-full">
          <p className="font-Telugu">{data[templeId].name}</p>
          <IoCloseSharp
            className="cursor-pointer"
            onClick={() => handleOpen(templeId)}
          />
        </div>
      </DialogHeader>
      <DialogBody className="pt-0">
        <hr />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* image div */}
          <div className="flex items-center justify-center">
            <img src={data[templeId].image} alt="" />
          </div>
          {/* content */}
          <div className="p-4 font-medium font-Telugu">{data[templeId].description}</div>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default Temple;
