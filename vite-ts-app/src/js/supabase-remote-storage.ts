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
        console.log(`Getting '${itemName}' from remote storage...`);
        const { data, error } = await supabase
            .from('remoteStorage')
            .select('item_value')
            .eq('item_name', itemName)
            .eq('user_id', this.options.userId)
            .eq('instance_id', this.options.instanceId);
        if (error) {
            console.log(`Error in supabase select: ${error}`);
        }
        if (data && data.length >= 1) {
            console.log(`Got '${itemName}' value from remote storage`);
            return data[0].item_value
        }
        return data
    }

    async setItem(itemName: string, itemValue: object) {
        console.log(`Setting '${itemName}' to remote storage`);
        const { data, error } = await supabase
            .from('remoteStorage')
            .update({ item_value: itemValue })
            .eq('item_name', itemName)
            .eq('user_id', this.options.userId)
            .eq('instance_id', this.options.instanceId)
            .select();
        if (error) {
            console.log(`Error in supabase update: ${error}`);
        } else {
            console.log(`Value of '${itemName}' has been set to remote storage`);
        }
        return data;
    }
}

export { RemoteStorage }
