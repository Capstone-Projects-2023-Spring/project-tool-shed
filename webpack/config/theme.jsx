import { extendTheme } from "@chakra-ui/react"

const toolshedTheme = extendTheme({
	components: {
		Button: {
			baseStyle: {
				cursor: 'pointer'
			}
		},
		Card: {
			baseStyle: {
				backgroundColor: 'rgb(241, 241, 241)'
			}
		}
	},
styles: {
    global: (props) => ({
      body: {
        overflowX: "hidden",
        bg: mode("gray.50", "#1B254B")(props),
      },
      html: {
        fontFamily: "Helvetica, sans-serif",
      },
    }),
  }
});

export default toolshedTheme
