function openModal() {
	const modal = document.querySelector("#modal");
	modal.showModal();
}

function closeModal() {
	const modal = document.querySelector("#modal");
	modal.close();
}

export { openModal, closeModal };
