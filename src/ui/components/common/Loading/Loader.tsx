import { Spinner } from "@nextui-org/react";

export default function Loader() {
    return (
        <div className="status flex justify-center items-center min-h-[70vh]">
            <Spinner color="primary"/>
        </div>)
}
