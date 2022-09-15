export default function Grid({ children, className = "" }) {
    return (
        <div
            className={"grid md:grid-cols-6 2xl:grid-cols-8 gap-4 " + className}
        >
            {children || <div>SORRY THERE IS NOTHING HERE </div>}
        </div>
    );
}
