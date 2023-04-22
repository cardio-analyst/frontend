type Options = {
    expires?: Date|number|string,
    path?: string,
    domain?: string,
    secure?: boolean,
}

class Cookie
{
    static set(name: string, value: string, options?: Options)
    {
        options = {
            path: '/',
            ...options
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = `${encodeURIComponent(name)}=${value}`;

        let propName: keyof Options;
        for (propName in options) {
            updatedCookie += '; ' + propName;
            const propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += '=' + propValue;
            }
        }
        document.cookie = updatedCookie;
    }

    static get (name: string): string
    {
        const matches = document.cookie.match(new RegExp(
            // eslint-disable-next-line
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : '';
    }
}

export function setCookie(name: string, value: string, options?: Options) {
    Cookie.set(name, value, options)
}

export function getCookie(name: string) {
    return Cookie.get(name);
}

export function deleteCookie(name: string) {
    setCookie(name, '', {
        expires: -1
    })
}

export function hasAuthCookies() {
    return !!(getCookie('accessToken') && getCookie('refreshToken'))
}
