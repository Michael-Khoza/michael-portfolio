useEffect(() => {
  const script = document.createElement('script')
  script.src = JOTFORM_SCRIPT
  script.async = true
  document.body.appendChild(script)

  return () => {
    document.body.removeChild(script)
  }
}, [])