import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'your_project_id',  // Replace with your Sanity project ID
  dataset: 'production',  // Replace with your dataset name
  useCdn: true, // `false` if you want to ensure fresh data
});