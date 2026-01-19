import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";

const ImageWindowContent = () => {
    const { window } = useWindowStore();
    const data = window.imgfile?.data;

    if (!data) {
        return null;
    }
    const { name, imgUrl } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
            </div>
            
            <div className="p-5 bg-white">
                {imgUrl ? (
                    <div className="w-full">
                        <img 
                        src={imgUrl}
                        alt={name} 
                        className="w-full h-auto max-h-[70vh] object-contain rounded" />
                    </div>
                ) : null}
            </div>
        </>
    );
};

const ImageWindow = WindowWrapper(ImageWindowContent, "imgfile");
export default ImageWindow;