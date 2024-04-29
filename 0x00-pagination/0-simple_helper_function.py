#!/usr/bin/env python3

""" Helper function for pagination """

from typing import Tuple

def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Return a tuple of start and end indexes for a given page and page size
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return start_index, end_index

