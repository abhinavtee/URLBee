import axios from 'axios'
import React, { useState } from 'react'
import { createShortUrl } from '../api/ShortUrl-API';
import { useSelector } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';


const UrlForm = () => {
  const [url, setUrl] = useState('https://www.google.com');
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [customShortUrl, setCustomShortUrl] = useState('');
  const [error, setError] = useState(null);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const queryClient = useQueryClient();

  const handleSubmit = async () => {
    try {
      const shortUrl = await createShortUrl(url, customShortUrl);
      setShortUrl(shortUrl);
      queryClient.invalidateQueries({ queryKey: ['userUrls'] });
      setError(null);
    } catch (err) {
      setError(err);
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    //Reset the copied state after 2 sec
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
  return (

    <div className="space-y-4">
      <div>
        <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
          Enter your URL
        </label>
        <input
          type="url"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          required
        />
      </div>
      <button
        onClick={handleSubmit}
        type="button"
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
      >Shorten URL</button>
      {error && (
        <p className="text-red-500 mt-2 text-sm">{error}</p>
      )}

      {isAuthenticated && (
        <div className="mt-4">
          <label htmlFor="customSlug" className="block text-sm font-medium text-gray-700 mb-1">
            Custom URL (optional)
          </label>
          <input
            type="text"
            id="customSlug"
            value={customShortUrl}
            onChange={(event) => setCustomShortUrl(event.target.value)}
            placeholder="Enter custom slug"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {shortUrl && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <h2 className="block text-sm font-medium text-green-800 mb-2">Your shortened URL:</h2>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={shortUrl}
              readOnly
              className="flex-1 px-3 py-2 bg-white border border-green-300 rounded-md text-sm"
            />
            <button
              onClick={handleCopy}
              className={`px-4 py-2 rounded-r-md transition-colors duration-200
                ${copied
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-gray-200  hover:bg-gray-300'}`}
            >
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      )}

    </div>

  )
}

export default UrlForm