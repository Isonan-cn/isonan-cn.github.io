import { profile } from '../settings'

export function highlightAuthor(authors: string): string{
	const author = authors.split(', ')
	if (author.includes(profile.author_name)){
		return authors.replace(profile.author_name, `<span class='font-medium underline'>${profile.author_name}</span>`)
	}
	return authors
}

export function formatPublicationVenue(journal: string, time: string): string {
	// Preprints intentionally omit the year; dated venue labels retain it.
	return journal === 'Preprint' ? journal : `${journal} ${time}`
}

