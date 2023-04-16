import { extendTheme } from "@chakra-ui/react"

const toolshedTheme = extendTheme({
	components: {
		Button: {
			baseStyle: {
				cursor: 'pointer'
			}
		}
	}
});

export default toolshedTheme
