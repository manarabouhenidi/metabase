(ns metabase.query-processor-test.basic-test
  (:require [clojure.test :refer :all]
            [metabase.test :as mt]
            dev
            [schema.core :as s]))

(comment dev/keep-me) ; NOCOMMIT

(deftest basic-test
  (is (schema= {:status (s/eq :completed)
                s/Keyword s/Any}
               (mt/run-mbql-query venues))))

;; NOCOMMIT
(defn x []
  (dev/process-query-debug
   (mt/mbql-query checkins
     {:fields [$id]
      :filter [:= $date [:relative-datetime -1 :month]]
      :limit  5})))