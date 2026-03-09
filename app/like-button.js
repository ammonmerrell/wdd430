export default function LikeButton() {
    function handleClick() {
            setLikes(likes + 1);
        }

        <button onClick={handleClick}>Like ({likes})</button>

        const [likes, setLikes] = useState(0);

        return <button onClick={handleClick}>Like ({likes})</button>
}
