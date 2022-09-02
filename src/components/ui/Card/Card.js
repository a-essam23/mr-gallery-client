export default function Card({ children, className }) {
    return (
        <div className={"shadow-cd " + className}>
            {children}
            <div className="bg-white absolute"></div>
        </div>
    );
}
