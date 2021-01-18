import React, {useState} from 'react';
import './ItemCount.css'

export default function ItemCount({stock, initial}) {

	const [count, setCount] = useState(Number(initial))

	const onAdd = () => {
		if (count < stock) {
			setCount(count + 1)
		} else {

		}
	}

	const onRemove = () => {
		if (count > initial) {
			setCount(count - 1)
		} else {

		}
	}

	return (
		<div className="itemCount">
			<div className="qty mt-5">
				<span className="minus bg-dark" onClick={onRemove}>-</span>
				<div className="count" name="qty">{count}</div>
				<span className="plus bg-dark" onClick={onAdd}>+</span>
			</div>
		</div>
	);
}
