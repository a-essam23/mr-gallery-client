import { v4 } from "uuid";

export default function ButtonsMenu({ items = [], selectedButton = "" }) {
    const buttonClass =
        "outline outline-2 outline-gray-300 p-2 w-full text-center cursor-not-allowed text-2xl bg-gray-200";
    const selectedButtonClass =
        "p-2 w-full text-center cursor-pointer text-3xl border-b-0";
    return (
        <div className="flex flex-1">
            {items.map((item, i) => {
                return (
                    <>
                        <div
                            key={v4()}
                            className={
                                item === selectedButton
                                    ? selectedButtonClass
                                    : buttonClass
                            }
                        >
                            {item.toUpperCase()}
                        </div>
                    </>
                );
            })}
        </div>
    );
}
