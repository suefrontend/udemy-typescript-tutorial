I can't insertAdjacentHTML afterbegin of .cart-review-content. why?
<div class="yotpo-widget-instance cart-review-content cart-review-content-185" style="display: block;" data-yotpo-product-id="185" data-yotpo-price="389.6" data-yotpo-currency="CAD" data-yotpo-name="Waterproof CORDURA®" data-yotpo-url="/Cordura-Seat-Covers.asp" data-yotpo-instance-id="661910" data-yotpo-element-loaded="true" data-v-app=""><div id="yotpo-reviews-main-widget" class="yotpo-reviews-main-widget yotpo-widget-override-css yotpo-device-laptop yotpo-display-m"><div class="yotpo-widget-clear"><div id="yotpo-app"><div class="yotpo-main-widget-layout yotpo-align-text"><div class="yotpo-base-layout" style="width: 90%;"><div class="ugc-storefront-widgets-tabs-container yotpo-main-widget-tabs" style="--56afbf46: #000000;"><div class="ugc-storefront-widgets-tabs-container__tab selected">Reviews</div><div class="ugc-storefront-widgets-tabs-container__tab">Q&amp;A</div></div><div class="yotpo-main-layout yotpo-main-reviews-widget"><div class="yotpo-head"></div><div><div data-v-a5eb37f4="" class="yotpo-header-container" style="--df156b00: rgba(63,75,84,0.05;"><div data-v-a5eb37f4="" class="yotpo-layout-header-wrapper"><div data-v-a5eb37f4="" class="yotpo-bottom-line" average-score="4.5"><div class="yotpo-summary-section"><div class="yotpo-bottom-line-summary"><div data-v-16844d8b="" class="yotpo-bottom-line-left-panel yotpo-bottom-line-score">4.5 <span data-v-16844d8b="" class="hidden">star rating</span></div><div class="yotpo-bottom-line-right-panel"><div class="yotpo-star-rating yotpo-bottom-line-stars"><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><span class="sr-only">4.5 star rating</span></div><div class="yotpo-bottom-line-text"><div class="yotpo-bottom-line-basic-text">2039 reviews</div></div><span class="sr-only">4.5 out of 5 stars 2039 reviews</span></div><div class="yotpo-vertical-border"></div></div><div class="yotpo-reviews-summary-button"><button data-v-ac74125e="" id="yotpo-summary" class="yotpo-icon-btn yotpo-no-fill-btn button-padding" type="button"><div data-v-ac74125e="" class="yotpo-button-icon-text">See reviews summary</div></button></div></div></div><div data-v-a5eb37f4="" class="yotpo-new-review-btn-wrapper"><button data-v-0345b07e="" id="yotpo-main-widget-btn" type="button" class="yotpo-new-review-btn yotpo-btn-s">Write A Review</button></div></div></div><div class="yotpo-review-border-smooth"></div><div><div class="yotpo-filters-container"><div class="yotpo-filters-container-inner" type="section"><div class="yotpo-filters-top-panel"><div class="yotpo-search-filter yotpo-free-search-filter-container"><label for="searchInput" class="yotpo-search-label"><input id="searchInput" class="yotpo-search-input" type="textarea" placeholder="Search reviews" role="searchbox" aria-live="polite" aria-label="Search reviews"></label></div><div data-v-1b2da119="" class="yotpo-score-filter yotpo-score-filter-container" contenteditable="true" type="select" style="--21cfaa16: #eaeaea; --a5cf4768: rgba(226,164,60,0.15;"><label data-v-1b2da119="" class="yotpo-dropdown-base"><input data-v-1b2da119="" class="yotpo-filter-select" placeholder="Rating" readonly=""><div data-v-1b2da119="" class="yotpo-star-rating yotpo-selected-score" style="display: none;"><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><span class="sr-only">0 star rating</span></div></label><div data-v-1b2da119="" class="yotpo-dropdown-content" style="display: none;"><span data-v-1b2da119="" class="yotpo-score-option" tabindex="0" title="0" style="background-color: rgba(226, 164, 60, 0.15);"><span data-v-1b2da119="" class="yotpo-score">All ratings</span></span><span data-v-1b2da119="" class="yotpo-score-option" tabindex="0" title="5" style=""><div data-v-1b2da119="" class="yotpo-star-rating yotpo-score"><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><span class="sr-only">5 star rating</span></div></span><span data-v-1b2da119="" class="yotpo-score-option" tabindex="0" title="4" style=""><div data-v-1b2da119="" class="yotpo-star-rating yotpo-score"><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><span class="sr-only">4 star rating</span></div></span><span data-v-1b2da119="" class="yotpo-score-option" tabindex="0" title="3" style=""><div data-v-1b2da119="" class="yotpo-star-rating yotpo-score"><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><span class="sr-only">3 star rating</span></div></span><span data-v-1b2da119="" class="yotpo-score-option" tabindex="0" title="2" style=""><div data-v-1b2da119="" class="yotpo-star-rating yotpo-score"><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><span class="sr-only">2 star rating</span></div></span><span data-v-1b2da119="" class="yotpo-score-option" tabindex="0" title="1" style=""><div data-v-1b2da119="" class="yotpo-star-rating yotpo-score"><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><span class="sr-only">1 star rating</span></div></span></div></div><div data-v-4a7c834d="" class="yotpo-media-filter yotpo-media-filter-container" style="--6b35c88c: #eaeaea;"><label data-v-4a7c834d="" for="mediaInput" class="yotpo-radio-base"><input data-v-4a7c834d="" id="mediaInput" class="yotpo-media-select" placeholder="With media" aria-label="Search reviews with media" role="checkbox" readonly=""></label></div></div><div class="yotpo-smart-topics-panel"><div data-v-28b948ae="" class="yotpo-smart-topics yotpo-smart-topics-container"><div data-v-28b948ae="" class="yotpo-smart-topics-headline">Popular topics</div><div data-v-28b948ae="" class="smart-topic-collection"><label data-v-47a3d96e="" data-v-28b948ae="" class="yotpo-smart-topic-filter smart-topic-wrapper" tabindex="0">covers</label><div data-v-28b948ae="" class="yotpo-smart-topics-see-more-label" tabindex="0" role="button" aria-pressed="false">Show more</div></div></div></div><div class="yotpo-filters-right-panel"><label class="yotpo-radio-base yotpo-sorting-filter-container"><div data-v-4e09f204="" class="yotpo-dropdown-closable yotpo-reviews-widget-dropdown" style="--aaa15eb4: rgba(63,75,84,1); --a87361ee: 1px; --68af81fd: rgb(234, 234, 234, 0.55);"><span data-v-4e09f204="" class="yotpo-dropdown-placeholder">Sort by:</span><div data-v-4e09f204="" class="yotpo-selected-value">Most recent</div><div data-v-4e09f204="" class="yotpo-dropdown-content-wrapper" style="right: 0px; display: none;"><span data-v-4e09f204="" class="yotpo-dropdown-option" tabindex="0" title="[object Object]" style="background-color: rgb(243, 243, 243);">Most recent </span><span data-v-4e09f204="" class="yotpo-dropdown-option" tabindex="0" title="[object Object]" style="">With media </span><span data-v-4e09f204="" class="yotpo-dropdown-option" tabindex="0" title="[object Object]" style="">Verified purchase </span><span data-v-4e09f204="" class="yotpo-dropdown-option" tabindex="0" title="[object Object]" style="">Highest rating </span><span data-v-4e09f204="" class="yotpo-dropdown-option" tabindex="0" title="[object Object]" style="">Lowest rating </span></div></div></label></div></div></div></div><div id="yotpo-reviews-container" class="yotpo-reviews-container"><div class="yotpo-reviews-list"><div class="yotpo-review" data-id="559803425"><div class="yotpo-review-left-panel"><div data-v-572fe5b0="" class="yotpo-reviewer"><div data-v-572fe5b0="" class="yotpo-reviewer-details-verified"><span data-v-572fe5b0="" class="yotpo-reviewer-name unselectable" title="Brady K." style="color: rgb(44, 44, 44);">Brady K.</span><div data-v-6bc4e6dc="" data-v-572fe5b0="" style="display: flex; justify-content: center;"><span data-v-6bc4e6dc="" class="yotpo-reviewer-verified-buyer-text unselectable" style="margin-left: 5px;">Verified Buyer</span></div></div></div></div><div class="yotpo-review-center-panel"><div class="yotpo-review-rating-title"><div class="yotpo-star-rating yotpo-review-star-rating"><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><span class="sr-only">5 star rating</span></div><div class="yotpo-review-title">Love the Custom Fit</div></div><div class="yotpo-review-content"><div class="yotpo-read-more-text">Super easy to install, looks like they were made just for my truck and they're holding up great so far. Love 'em!</div><span id="read-more-0.8279515200772265" class="sr-only" aria-hidden="true">read more about review content Super easy to install, looks like</span></div></div><div class="yotpo-review-right-panel"><div class="yotpo-review-details"><div data-v-6fd5254e="" class="yotpo-review-date"><div data-v-6fd5254e="" class="yotpo-date-format">12/03/24</div></div></div></div></div><div class="yotpo-review-votes-wrapper top-margin" style="flex-direction: row; --e02b6798: rgba(63,75,84,1);"><div class="yotpo-review-votes-text unselectable" style="margin-right: 8px;">Was this review helpful?</div><div class="yotpo-review-votes-icons-wrapper"><div class="yotpo-review-votes-icons-container" style="--986037ec: rgba(63,75,84,1);"><div class="yotpo-review-votes-icons"></div><div class="yotpo-review-votes-number unselectable">0</div></div><div class="yotpo-review-votes-icons-container" style="--986037ec: rgba(63,75,84,1);"><div class="yotpo-review-votes-icons"></div><div class="yotpo-review-votes-number unselectable">0</div></div></div></div><div class="yotpo-review-border-smooth top-margin"></div><div class="yotpo-review" data-id="559803440"><div class="yotpo-review-left-panel"><div data-v-572fe5b0="" class="yotpo-reviewer"><div data-v-572fe5b0="" class="yotpo-reviewer-details-verified"><span data-v-572fe5b0="" class="yotpo-reviewer-name unselectable" title="Grant S." style="color: rgb(44, 44, 44);">Grant S.</span><div data-v-6bc4e6dc="" data-v-572fe5b0="" style="display: flex; justify-content: center;"><span data-v-6bc4e6dc="" class="yotpo-reviewer-verified-buyer-text unselectable" style="margin-left: 5px;">Verified Buyer</span></div></div></div></div><div class="yotpo-review-center-panel"><div class="yotpo-review-rating-title"><div class="yotpo-star-rating yotpo-review-star-rating"><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><span class="sr-only">5 star rating</span></div><div class="yotpo-review-title">Fantastic Tundra Seat Covers</div></div><div class="yotpo-review-content"><div class="yotpo-read-more-text">Rock solid product and is very durable ! Instructions were clear, and had all necessary clips.
The rear seat installation was extremely easy and smartly designed.</div><span id="read-more-0.17276280632134577" class="sr-only" aria-hidden="true">read more about review content Rock solid product and is very</span></div></div><div class="yotpo-review-right-panel"><div class="yotpo-review-details"><div data-v-6fd5254e="" class="yotpo-review-date"><div data-v-6fd5254e="" class="yotpo-date-format">02/03/24</div></div></div></div></div><div class="yotpo-review-votes-wrapper top-margin" style="flex-direction: row; --e02b6798: rgba(63,75,84,1);"><div class="yotpo-review-votes-text unselectable" style="margin-right: 8px;">Was this review helpful?</div><div class="yotpo-review-votes-icons-wrapper"><div class="yotpo-review-votes-icons-container" style="--986037ec: rgba(63,75,84,1);"><div class="yotpo-review-votes-icons"></div><div class="yotpo-review-votes-number unselectable">0</div></div><div class="yotpo-review-votes-icons-container" style="--986037ec: rgba(63,75,84,1);"><div class="yotpo-review-votes-icons"></div><div class="yotpo-review-votes-number unselectable">0</div></div></div></div><div class="yotpo-review-border-smooth top-margin"></div><div class="yotpo-review" data-id="559803441"><div class="yotpo-review-left-panel"><div data-v-572fe5b0="" class="yotpo-reviewer"><div data-v-572fe5b0="" class="yotpo-reviewer-details-verified"><span data-v-572fe5b0="" class="yotpo-reviewer-name unselectable" title="Andy" style="color: rgb(44, 44, 44);">Andy</span><div data-v-6bc4e6dc="" data-v-572fe5b0="" style="display: flex; justify-content: center;"><span data-v-6bc4e6dc="" class="yotpo-reviewer-verified-buyer-text unselectable" style="margin-left: 5px;">Verified Buyer</span></div></div></div></div><div class="yotpo-review-center-panel"><div class="yotpo-review-rating-title"><div class="yotpo-star-rating yotpo-review-star-rating"><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><span class="sr-only">2 star rating</span></div><div class="yotpo-review-title">Cover the seat but loose look/feel</div></div><div class="yotpo-review-content"><div class="yotpo-read-more-text">They cover the seats. 2021 Rav4 XLE Installation was fairly straight forward. But the fit on the front seats leaves a lot to he desired. Not sure if it's a material issue or pattern issue, but the cover "hammocks" over the front bucket seats. Also popped a seam on the driver's side front backrest just</div><a class="yotpo-read-more" aria-expanded="false" data-position="closed" tabindex="0" role="button">Read more</a><span id="read-more-0.6702119387268046" class="sr-only" aria-hidden="true">read more about review content They cover the seats. 2021 Rav4</span></div></div><div class="yotpo-review-right-panel"><div class="yotpo-review-details"><div data-v-6fd5254e="" class="yotpo-review-date"><div data-v-6fd5254e="" class="yotpo-date-format">25/02/24</div></div></div></div></div><div class="yotpo-review-votes-wrapper top-margin" style="flex-direction: row; --e02b6798: rgba(63,75,84,1);"><div class="yotpo-review-votes-text unselectable">Was this review helpful?</div><div class="yotpo-review-votes-icons-wrapper"><div class="yotpo-review-votes-icons-container" style="--986037ec: rgba(63,75,84,1);"><div class="yotpo-review-votes-icons"></div><div class="yotpo-review-votes-number unselectable">0</div></div><div class="yotpo-review-votes-icons-container"><div class="yotpo-review-votes-icons"></div><div class="yotpo-review-votes-number unselectable">0</div></div></div></div><div class="yotpo-review-border-smooth top-margin"></div><div class="yotpo-review" data-id="559803442"><div class="yotpo-review-left-panel"><div data-v-572fe5b0="" class="yotpo-reviewer"><div data-v-572fe5b0="" class="yotpo-reviewer-details-verified"><span data-v-572fe5b0="" class="yotpo-reviewer-name unselectable" title="David J." style="color: rgb(44, 44, 44);">David J.</span><div data-v-6bc4e6dc="" data-v-572fe5b0="" style="display: flex; justify-content: center;"><span data-v-6bc4e6dc="" class="yotpo-reviewer-verified-buyer-text unselectable" style="margin-left: 5px;">Verified Buyer</span></div></div></div></div><div class="yotpo-review-center-panel"><div class="yotpo-review-rating-title"><div class="yotpo-star-rating yotpo-review-star-rating"><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><span class="sr-only">5 star rating</span></div><div class="yotpo-review-title">Very happy customer!</div></div><div class="yotpo-review-content"><div class="yotpo-read-more-text">I ordered these for my dog-worn 2010 Frontier, the seat covers were excellent and the dog hair comes off easy. They fit my seats like a glove ! The headrest covers were a bit short but thanks to the great service of Madison, new ones arrived that fit great ! I can't recommend these covers more highly,</div><a class="yotpo-read-more" aria-expanded="false" data-position="closed" tabindex="0" role="button">Read more</a><span id="read-more-0.8929373373938778" class="sr-only" aria-hidden="true">read more about review content I ordered these for my dog-worn</span></div></div><div class="yotpo-review-right-panel"><div class="yotpo-review-details"><div data-v-6fd5254e="" class="yotpo-review-date"><div data-v-6fd5254e="" class="yotpo-date-format">17/02/24</div></div></div></div></div><div class="yotpo-review-votes-wrapper top-margin"><div class="yotpo-review-votes-text unselectable">Was this review helpful?</div><div class="yotpo-review-votes-icons-wrapper"><div class="yotpo-review-votes-icons-container" ><div class="yotpo-review-votes-icons"></div><div class="yotpo-review-votes-number unselectable">0</div></div><div class="yotpo-review-votes-icons-container"><div class="yotpo-review-votes-icons"></div><div class="yotpo-review-votes-number unselectable">0</div></div></div></div><div class="yotpo-review-border-smooth top-margin"></div><div class="yotpo-review" data-id="559803451"><div class="yotpo-review-left-panel"><div data-v-572fe5b0="" class="yotpo-reviewer"><div data-v-572fe5b0="" class="yotpo-reviewer-details-verified"><span data-v-572fe5b0="" class="yotpo-reviewer-name unselectable" title="Jeff B.">Jeff B.</span><div data-v-6bc4e6dc="" data-v-572fe5b0=""><span data-v-6bc4e6dc="" class="yotpo-reviewer-verified-buyer-text unselectable" >Verified Buyer</span></div></div></div></div><div class="yotpo-review-center-panel"><div class="yotpo-review-rating-title"><div class="yotpo-star-rating yotpo-review-star-rating"><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><div class="star-container"></div><span class="sr-only">5 star rating</span></div><div class="yotpo-review-title">Excellent Cover</div></div><div class="yotpo-review-content"><div class="yotpo-read-more-text">Took a while to ship, but in the advertised range, and well worth the wait. Quality cover. Takes effort to install, but fits quite well. Excellent upgrade and makes this old vehicle look so much better after spills from young children, now grown.</div><span id="read-more-0.11548494354704486" class="sr-only" aria-hidden="true">read more about review content Took a while to ship, but in the</span></div></div><div class="yotpo-review-right-panel"><div class="yotpo-review-details"><div data-v-6fd5254e="" class="yotpo-review-date"><div data-v-6fd5254e="" class="yotpo-date-format">30/01/24</div></div></div></div></div><div class="yotpo-review-votes-wrapper top-margin"><div class="yotpo-review-votes-text unselectable">Was this review helpful?</div><div class="yotpo-review-votes-icons-wrapper"><div class="yotpo-review-votes-icons-container"><div class="yotpo-review-votes-icons"></div><div class="yotpo-review-votes-number unselectable">0</div></div><div class="yotpo-review-votes-icons-container"><div class="yotpo-review-votes-icons"></div><div class="yotpo-review-votes-number unselectable">0</div></div></div></div><div class="yotpo-review-border-smooth top-margin"></div><nav class="yotpo-reviews-pagination-container" role="navigation"><div class="yotpo-horizontal-pagination"><a aria-disabled="true" class="disabled yotpo-reviews-pagination-item" href="#" tabindex="0" role="button" aria-label="Goto previous page"></a><a aria-disabled="false" class="selected yotpo-reviews-pagination-item yotpo-pagination-number" href="#" tabindex="0" role="button" page="1" aria-label="Page 1, Current Page" aria-current="true">1</a><a aria-disabled="false" class="yotpo-reviews-pagination-item yotpo-pagination-number" href="#" tabindex="0" role="button" page="1" aria-label="Goto Page 2" aria-current="false">2</a><a aria-disabled="false" class="yotpo-reviews-pagination-item yotpo-pagination-number" href="#" tabindex="0" role="button" page="1" aria-label="Goto Page 3" aria-current="false">3</a><a aria-disabled="false" class="yotpo-reviews-pagination-item yotpo-pagination-number" href="#" tabindex="0" role="button" page="1" aria-label="Goto Page 4" aria-current="false">4</a><a aria-disabled="false" class="yotpo-reviews-pagination-item yotpo-pagination-number" href="#" tabindex="0" role="button" page="1" aria-label="Goto Page 5" aria-current="false">5</a><a aria-disabled="false" class="yotpo-reviews-pagination-item" href="#" tabindex="0" role="button" aria-label="Goto next page"></a></div></nav></div></div></div></div><div class="yotpo-widget-instance" data-yotpo-instance-id="677727" data-yotpo-product-id="185" data-yotpo-name="Waterproof CORDURA®" data-yotpo-description="" data-yotpo-url="/Cordura-Seat-Covers.asp" data-yotpo-image-url="" mode-embedded="true" view-widget-width="100" mode-preview="false" mode-read-only="false" data-yotpo-element-loaded="true" data-v-app=""><div id="yotpo-questions-and-answers" class="yotpo-questions-and-answers yotpo-widget-override-css yotpo-device-laptop yotpo-display-m"><div class="yotpo-widget-clear"><div id="yotpo-app"><div class="yotpo-main-widget-layout yotpo-align-text"><div class="yotpo-main-layout"><div class="yotpo-header-container yotpo-header yotpo-header-margin"><div class="yotpo-header-head" ></div></div><div class="yotpo-empty-state-wrapper"><div class="yotpo-empty-state yotpo-qna-empty-state"><div class="yotpo-title-text">Have a question?</div><div class="yotpo-body-text">Be the first to ask something about this product.</div></div><div class="yotpo-ask-question-btn-wrapper" tabindex="0"><a id="yotpo-widget-btn" tabindex="0" role="button" data-cy="ask-question-btn" class="yotpo-question-btn yotpo-ask-question-btn-l empty-state"><span>Ask a question</span></a></div></div></div></div></div></div></div></div></div></div></div></div></div></div>