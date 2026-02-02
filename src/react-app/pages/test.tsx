import { eventBus } from "../utils/bus";
export default function Test() {

    return (
        <button
            onClick={() => eventBus.emit('order:refresh')}
            aria-label="EventBus Test"
        >
            测试事件
        </button>
    )
}