function ImageCard({ children, imgSrc, ...props }) {
    return (
        <div
            {...props}
            className="relative w-full max-h-70 overflow-hidden
            rounded-2xl shadow-lg group transition-transform duration-200 hover:scale-105"
        >
            <img
                src={imgSrc} alt=""
                className="transition-transform group-hover:scale-105
            duration-500"
            />
            <div className="absolute inset-0 flex items-end
                bg-gradient-to-t from-black/30 to-transparent"
            >
                <div className="p-4 text-white">{children}</div>
            </div>
        </div>
    );

}

export default ImageCard;