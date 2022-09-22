export default function Grid({ children, className = "" }) {
    console.log(className);
    return (
        <div className={`grid grid-cols-6 2xl:grid-cols-8 gap-4 ${className}`}>
            {children}
        </div>
    );
}
