import clsx from "clsx";

export default function PageSection({ 
    children, 
    title, 
    className, 
    contentClassName })
     {
    return (
        <section className={clsx("w-full p-4 flex justify-center items-center", className)}>
            <div className={clsx("w-full max-w-screen-xl",contentClassName)}>
                {title && <h1 className="text-3xl text-center">{title}</h1>}
                {children}
            </div>
        </section>
    )
}