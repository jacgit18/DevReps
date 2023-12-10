export const customLog = (
  type: "log" | "info" | "warn" | "error" | "table",
  pre: string = "",
  arg: any,
  post: string = "",
  ...context: any[]
): void => {
  const logMessage = `${pre} ${arg} ${post}`

  switch (type) {
    case "log":
      console.log(logMessage)
      break
    case "info":
      console.info(logMessage)
      break
    case "warn":
      console.warn(logMessage)
      break
    case "error":
      console.error(logMessage)
      break
    case "table":
      console.table(logMessage)
      break
    default:
      console.log(logMessage) // Default to log if an invalid type is provided
      break
  }
  context.forEach((item, index) => {
    console.log(`Context ${index + 1}:`)
    console.log(item)
  })
}

export const FastLogger = (output: any = ""): void => {
  console.time("fast")

  if (typeof output === "object" && output !== null) {
    // If output is an object, concatenate its property values
    const values = Object.keys(output)
    console.log(values)
  } else {
    console.log(output)
  }

  console.timeEnd("fast")
}

export const SlowLogger = (output: any = ""): void => {
  // slow: 10.575s
  console.time("slow")
  for (let i = 0; i <= 1000000; i++) {
    console.log(i)
  }
  console.timeEnd("slow")
}

export const FastLoggerSpeedTest = (output: any = ""): void => {
  //  fast: 2.348s quicker way to console log
  console.time("fast")
  for (let i = 0; i <= 1000000; i++) {
    output += `${i}\n`
  }
  console.log(output) // one long string
  console.timeEnd("fast")
}

// Usage examples:
// customLog("log", "Before:", "Hello", "After", "Additional Context")
// customLog('info', 'Info:', 'Some Information', 'Details', 'More Context');
// customLog('error', 'Error:', 'Something went wrong', 'Details', 'Error Context');
