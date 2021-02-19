import React, {useEffect, useState} from 'react';
import './ItemCount.css'

export default function ItemCount({stock, initial, onChange: onChange}) {

	const [count, setCount] = useState(Number(initial))

	useEffect(() => {
		onChange(count)
	}, [count])

	const onCounterAdd = () => {
		setCount((count < stock) ? count + 1 : stock)
	}

	const onRemove = () => {
		setCount((count > initial) ? count - 1 : 0)
	}

	return (
		<div className="itemCount">
			<div className="qty">
				<a href="#" className="action minus bg-dark" onClick={onRemove}>-</a>
				<div className="count" name="qty">{count}</div>
				<a href="#" className="action plus bg-dark" onClick={onCounterAdd}>+</a>
			</div>
		</div>
	);
}
