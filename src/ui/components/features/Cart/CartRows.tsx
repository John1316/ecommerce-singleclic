
export default function CartRows({title, number} : CartRowsProps) {
    return (
        <dl className="flex items-center justify-between gap-4">
            <dt className={`text-base font-${title === "Total" ? 'bold' : 'normal'} text-gray-${title === "Total" ? '900' : '500'} dark:text-gray-400`}>{title || ""}</dt>
            <dd className={`text-base font-${title === "Total" ? 'bold' : 'normal'} text-gray-900 dark:text-white`}>{number || 0}</dd>
        </dl>)
}
