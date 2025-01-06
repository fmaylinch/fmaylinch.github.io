import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fraxxrlznvspwllyovre.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyYXh4cmx6bnZzcHdsbHlvdnJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3NjE3MDIsImV4cCI6MjA1MTMzNzcwMn0.4vFfLBTuWYE4NoOQ3QAZH90lDcAjGtLRbXCxSjgPbuU';
const supabase = createClient(supabaseUrl, supabaseKey)

class RemoteStorage {
    private options: { userId: string; instanceId: string };

    constructor(options: {userId: string, instanceId: string}) {
        console.log("Creating RemoteStorage with options:", options);
        this.options = options;
    }

    async getItem(itemName: string) {
        const id = this.buildId(itemName);
        console.log(`Getting value of '${id}' from remote storage...`);
        const { data, error } = await supabase
            .from('remoteStorage')
            .select('value')
            .eq('id', id);
        if (error) {
            console.log(`Error in supabase select: ${error}`);
        }
        if (data && data.length >= 1) {
            console.log(`Got '${itemName}' value from remote storage`);
            return data[0].value
        }
        return data
    }

    async setItem(itemName: string, value: object) {
        const id = this.buildId(itemName);
        console.log(`Setting value of ${id} to remote storage`);
        const { data, error } = await supabase
            .from('remoteStorage')
            .upsert({ id, value })
            .select()
        if (error) {
            console.log(`Error in supabase update: ${error}`);
        } else {
            console.log(`Value of '${itemName}' has been set to remote storage`);
        }
        return data;
    }

    private buildId(itemName: string) {
        return `${this.options.instanceId}-${this.options.userId}-${itemName}`;
    }
}

export { RemoteStorage }
