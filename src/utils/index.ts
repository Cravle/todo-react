export const getItem = (key: string): any =>
	JSON.parse(localStorage.getItem(key) as string)

export const setItem = (key: string, value: string) => {
	localStorage.setItem(key, value)
}

export const clearLS = () => localStorage.clear()

export const isLogin = () => !!getItem('user')
