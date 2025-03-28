import { NextResponse } from "next/server";

// Define user interface
interface UserData {
    name: string;
    email: string;
    password: string;
}

// Mock in-memory database
const mockUserDB: UserData[] = [];

// Mock User model
class MockUser {
    name: string;
    email: string;
    password: string;

    constructor(userData: UserData) {
        this.name = userData.name;
        this.email = userData.email;
        // Simulate password hashing with a simple indicator
        this.password = `hashed_${userData.password}`;
    }

    // Instance method
    async save(): Promise<MockUser> {
        mockUserDB.push({
            name: this.name,
            email: this.email,
            password: this.password,
        });
        return this;
    }

    // Static methods
    static async findOne({
        email,
    }: {
        email: string;
    }): Promise<UserData | undefined> {
        return mockUserDB.find((user) => user.email === email);
    }
}

export async function POST(request: Request) {
    try {
        const { name, email, password } = await request.json();

        // Validate input
        if (!name || !email || !password) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Check if user already exists
        const existingUser = await MockUser.findOne({ email });

        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 409 }
            );
        }

        // Create new user using our mock User
        const user = new MockUser({
            name,
            email,
            password,
        });

        await user.save();

        // You can also log the current state of the mock database for testing
        console.log("Current users:", mockUserDB);

        return NextResponse.json(
            {
                message: "User registered successfully",
                userId: mockUserDB.length,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { error: "Registration failed" },
            { status: 500 }
        );
    }
}
