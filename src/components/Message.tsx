type MessageProps = {
    name?: string;
};
export function Message({ name }: MessageProps) {
    if (name) {
        return <h1 className="text-center text-primary">Hello {name}!</h1>;
    }
    return <h1 className="text-center text-secondary">Hello React!</h1>;
}

export default Message;
