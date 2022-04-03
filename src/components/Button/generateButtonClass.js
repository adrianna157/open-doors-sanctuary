const BUTTONDEFAULTCLASS = "btton"

export function generateButtonClass(props) {
	let buttonClass
	let padding

	if (props.overrideCSS) {
		if (props.className) {
			buttonClass = props.className
		} else {
			buttonClass = ""
		}
	} else {
		if (props.solidGreen) {
			buttonClass = BUTTONDEFAULTCLASS + " green-button"
		} else if (props.linedGreen) {
			buttonClass = BUTTONDEFAULTCLASS + " primary-lined-green"
		} else if (props.noLineBlue) {
			buttonClass = BUTTONDEFAULTCLASS + " primary-noline-blue"
		} else if (props.solidRed) {
			buttonClass = BUTTONDEFAULTCLASS + " primary-solid-red"
		} else if (props.tab) {
			buttonClass = "btton-tab"
		} else if (props.activeTab) {
			buttonClass = "btton-tab btton-tab-active"
		} else if (props.anchorTag) {
			buttonClass = "underline text-[#a26360]";
		} else {
			buttonClass = BUTTONDEFAULTCLASS
		}

		if (props.noPadding) {
			padding = ""
		} else if (props.padding) {
			padding = " " + props.padding
		} else {
			padding = ""
		}

		if (props.className) {
			buttonClass = buttonClass + " " + props.className
		}
	}

	return buttonClass + padding
}
