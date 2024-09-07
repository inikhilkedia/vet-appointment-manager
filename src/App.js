import { useState, useEffect, useCallback, useMemo } from "react";
import { BiCalendar } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";
import debounce from "lodash/debounce";

export default function App() {
	const [appointmentList, setAppointmentList] = useState([]);
	const [query, setQuery] = useState("");
	const [sortBy, setSortBy] = useState("aptDate");
	const [orderBy, setOrderBy] = useState("asc");

	// Memoize filtered and sorted appointments
	const filteredAppointments = useMemo(() => {
		const lowerCaseQuery = query.toLowerCase();
		return appointmentList
			.filter((item) => {
				const { petName, ownerName, aptNotes } = item;
				return (
					petName.toLowerCase().includes(lowerCaseQuery) ||
					ownerName.toLowerCase().includes(lowerCaseQuery) ||
					aptNotes.toLowerCase().includes(lowerCaseQuery)
				);
			})
			.sort((a, b) => {
				const order = orderBy === "asc" ? 1 : -1;
				return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
					? -1 * order
					: 1 * order;
			});
	}, [appointmentList, query, sortBy, orderBy]);

	// Fetch data with async/await
	const fetchData = useCallback(async () => {
		try {
			const response = await fetch("./data.json");
			const data = await response.json();
			setAppointmentList(data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	// Debounced search query handler
	const debouncedQueryChange = useMemo(
		() =>
			debounce((inputQuery) => {
				setQuery(inputQuery);
			}, 300),
		[]
	);

	const handleQueryChange = useCallback(
		(inputQuery) => {
			debouncedQueryChange(inputQuery);
		},
		[debouncedQueryChange]
	);

	const handleAddAppointment = useCallback((newAppointment) => {
		setAppointmentList((prevList) => [...prevList, newAppointment]);
	}, []);

	const handleDeleteAppointment = useCallback((appointmentId) => {
		setAppointmentList((prevList) =>
			prevList.filter((appointment) => appointment.id !== appointmentId)
		);
	}, []);

	const lastAppointmentId = useMemo(() => {
		return appointmentList.reduce(
			(max, item) => (Number(item.id) > max ? Number(item.id) : max),
			0
		);
	}, [appointmentList]);

	return (
		<div className="App container mx-auto mt-3 font-thin">
			<h1 className="text-5xl mb-3">
				<BiCalendar className="inline-block text-red-400 align-top" />
				Your Appointments
			</h1>

			<AddAppointment
				onSendAppointment={handleAddAppointment}
				lastId={lastAppointmentId}
			/>

			<Search
				query={query}
				onQueryChange={handleQueryChange}
				orderBy={orderBy}
				onOrderByChange={setOrderBy}
				sortBy={sortBy}
				onSortByChange={setSortBy}
			/>

			<ul className="divide-y divide-gray-200">
				{filteredAppointments.map((appointment) => (
					<AppointmentInfo
						key={appointment.id}
						appointment={appointment}
						onDeleteAppointment={handleDeleteAppointment}
					/>
				))}
			</ul>
		</div>
	);
}
