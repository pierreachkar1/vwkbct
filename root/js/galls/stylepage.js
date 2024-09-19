function qaTeaser (){
            if(typeof(TurnToItemData) == 'undefined' || typeof(TurnToItemData.counts) == 'undefined') {
                return '';
            } else {
                var answerCount = TurnToItemData.counts.a;
                var questionCount = TurnToItemData.counts.q;
                var teaserContainer = TurnTojQuery(".TurnToItemTeaser");

                var teaserHtml = ' | ';

                if(questionCount == 0) {
                    teaserHtml = teaserHtml + '<a id="askQuestion" href="javascript:void(0)">Ask a Question</a>';
                } else {
                    teaserHtml = teaserHtml + '<a id="readQuestions" href="javascript:void(0)">' + questionCount + ' Question' + (questionCount == 1 ? '' : 's') + ', ' + answerCount + ' Answer' + (answerCount == 1 ? '' : 's') + '</a>';
                }

                 var reviewCount = TurnToItemData.counts.r;
                if( reviewCount == 0 && questionCount == 0 ) {
                    teaserHtml += " ";
                }

                // Fill container with Q&A content
                teaserContainer.html(teaserHtml);

                // Add the appropriate listeners to the links
                teaserContainer.find('#askQuestion').click(function(e) {
                    e.preventDefault();
                    $("html, body").animate({ scrollTop: $('#qa_widget').offset().top }, 1500);
               
                });

                teaserContainer.find('#readQuestions').click(function(e) {
                    e.preventDefault();
                    $("html, body").animate({ scrollTop: $('#qa_widget').offset().top }, 1500);
                 
                });
            }
        }

  function reviewsTeaser() {
            if(typeof(TurnToItemData) == 'undefined' || typeof(TurnToItemData.counts) == 'undefined') {
                return '';
            } else {
                var reviewCount = TurnToItemData.counts.r;
                var teaserContainer = TurnTojQuery(".TurnToReviewsTeaser");
                var teaserHtml = '';

                // round the average rating to the nearest tenth
                var rating = Math.round((TurnToItemData.counts.ar + 0.25) * 100.0) / 100.0;
                rating = rating.toString();
                var decimal = parseInt(rating.substring(2, 3))
                rating = rating.substring(0, 1) + "-" + (decimal >= 5 ? '5' : '0')

                if(reviewCount == 0) {
                    teaserHtml = '<div class="TTratingBox TTrating-0-0"></div> <a id="writeReview" href="javascript:void(0)">Write a Review</a>';
                } else {
                    teaserHtml = '<div class="TTratingBox TTrating-' + rating + '"></div><a id="readReviews" href="javascript:void(0)">' + reviewCount + ' Review' + (reviewCount == 1 ? '' : 's') + '</a>';
                }

                teaserContainer.html(teaserHtml);

                // Listener on 'read reviews' link
                teaserContainer.find('#readReviews').click(function(e) {
                    
                    $("html, body").animate({ scrollTop: $('#reviews_widget').offset().top }, 1500);
                });

                // Listener on 'write review' link
                teaserContainer.find('#writeReview').click(function(e) {
                    TurnTo.writeReview();
                });
            }
        } 

function clickReviewsTabFromTeaser() {
  // your custom implementation should go here

  // this implementation assumes reviews are directly visible in page not under a tab
  TurnTojQuery('html, body').animate({
     scrollTop: TurnTojQuery("#TurnToReviewsContent").offset().top
  });
  
  // this is an example of how you might do it if your reviews
  // were on a tab with id #list_productreview
  // var tabPos = TurnTojQuery('#list_productreview');
  // window.scrollTo(0, tabPos.offset().top);

}

function clickCommentsFromTeaser() {
  // your custom implementation should go here

  //var idForScrollTo = '#TurnToContent'; // use this one if qa widget is in page
  var idForScrollTo = '#TurnToChatterContent'; // use this one if checkout chatter PDP display widget is in page

  // this implementation assumes the widget is directly visible in page not under a tab
  TurnTojQuery('html, body').animate({
     scrollTop: TurnTojQuery(idForScrollTo).offset().top
  });
}

var turnToConfig = {
      siteKey: document.getElementById("turntoKey").value,
      skipCssLoad:false,
      setupType: "dynamicEmbed",
      reviewsSetupType: "dynamicEmbed",
      paginationReviewsShownInitially: 10,
      reviewsTruncateLineLength: 4,
      iTeaserFunc: qaTeaser,
      reviewsTeaserFunc: reviewsTeaser,
      loadRteaserAfterChatter: true,
      chatter: {
                columns: 2, 
                minimumCommentCount: 1, 
                rowsInCollapsedView: 2, 
                rowsInExpandedView: 4, 
                minimumCommentCharacterCount: 10, 
                minimumCommentWordCount: 3,
                title: "Why Customers Chose This"
        }
      };
var TurnToItemSku =  document.getElementById("style").value;
var TurnToChatterSku = document.getElementById("style").value;
var TurnToGallerySkus =  document.getElementById("style").value;

(function() {
var tt = document.createElement('script'); tt.type = 'text/javascript'; tt.async = true;
tt.src = document.location.protocol + "//static.www.turnto.com/traServer4_3/chatterjs/" + turnToConfig.siteKey + "/turnto-chatter.js";
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(tt, s);
})();





