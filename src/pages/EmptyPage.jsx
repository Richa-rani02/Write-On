export const EmptyPage = ({ msg }) => {
    return (
        <div className="error-page flex items-center justify-center flex-col mt-2">
            <div className="error-img w-[12rem] h-[12rem] lg:w-[15rem] lg:h-[15rem]">
                <img src="../Assets/no_notes.png" className="responsive" alt="errorstate" />
            </div>
            <h1 className="font-semibold text-lg">{msg}</h1>
        </div>
    )
}