export type UserType = {
    name: string
    age: number
}

function increaseAge(u: UserType) {
    u.age++
}

test('reference type test', () => {
    const user: UserType = {
        name: 'Gena',
        age: 35
    }
    increaseAge(user)

    expect(user.age).toBe(36)
})
test('array test', () => {
    const users = [
        {
            name: 'Gena',
            age: 35
        },
        {
            name: 'Olya',
            age: 31
        }
    ]

    const admins = users

    admins.push({name: 'bandugan', age: 10})

    expect(users[2]).toEqual({name: 'bandugan', age: 10})

})
test('reference with object type test', () => {
    const user = {
        name: 'Gena',
        age: 35,
        address: {
            city: 'Kiev'
        }
    }

    // const addr = user.address

    const user2 = {
        name: 'Natasha',
        age: 32,
        address: user.address
    }

    user2.address.city = 'Kanary'



    expect(user.address.city).toBe('Kanary')
})